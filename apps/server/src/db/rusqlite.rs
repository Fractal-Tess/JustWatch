use super::migrations;
use rocket::{fairing::AdHoc, Build, Rocket};
use rocket_sync_db_pools::{database, rusqlite};

#[database("rusqlite")]
pub struct DB(rusqlite::Connection);

impl DB {
    async fn init(rocket: Rocket<Build>) -> Rocket<Build> {
        DB::get_one(&rocket)
            .await
            .expect("Cannot mount database")
            .run(|mut conn| {
                migrations()
                    .to_latest(&mut conn)
                    .expect("Cannot init rusqlite database");
            })
            .await;

        rocket
    }
    pub fn stage() -> AdHoc {
        AdHoc::on_ignite("Rusqlite Stage", |rocket| async {
            rocket
                .attach(DB::fairing())
                .attach(AdHoc::on_ignite("Rusqlite Init", |rocket| async {
                    DB::init(rocket).await
                }))
        })
    }
}
