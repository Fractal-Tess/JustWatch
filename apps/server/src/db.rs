use rocket::{fairing::AdHoc, Build};
use rusqlite::Connection;

use rusqlite_migration::{Migrations, M};

pub fn migrations() -> Migrations<'static> {
    Migrations::new(vec![
        M::up(
            "CREATE TABLE IF NOT EXISTS posts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                text VARCHAR NOT NULL
            )",
        ), // Migrate tables like so:
           // M::up("ALTER TABLE posts ADD COLUMN ddiscdiesc TEXT;"),
    ])
}

struct DB {}

impl DB {
    fn init(rocket: Rocket<Build>) -> Rocket<Build> {
        let path = PathBuf::from("./db.sqlite");
        let mut conn = Connection::open(path).expect("Cannot open database connection");

        migrations()
            .to_latest(&mut conn)
            .expect("Cannot migrate database");

        rocket
    }
    pub fn stage() -> AdHoc {
        AdHoc::on_ignite("Rusqlite stage", |rocket| async {
            DB::init(rocket);
            rocket
        })
    }
}
