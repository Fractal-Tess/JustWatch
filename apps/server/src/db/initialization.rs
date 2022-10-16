use rocket::{fairing::AdHoc, Build, Rocket};

use super::{migrations, DB};

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
        AdHoc::on_ignite("Rusqlite Stage", |rocket| async { DB::init(rocket).await })
    }
}
