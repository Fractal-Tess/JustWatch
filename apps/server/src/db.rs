use rusqlite::Connection;
use rusqlite_migration::{Migrations, M};

#[cfg(test)]
mod test {
    use super::*;
    #[test]
    fn migrations_test() {
        assert!(DB::migrations().validate().is_ok());
    }
}

pub struct DB {
    pub conn: Connection,
}

impl DB {
    pub fn migrations() -> Migrations<'static> {
        Migrations::new(vec![M::up(
            "CREATE TABLE IF NOT EXISTS film (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title VARCHAR(255) NOT NULL,
                description TEXT
            );
            
            CREATE TABLE IF NOT EXISTS user (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                display_name VARCHAR(255) NOT NULL,
                username VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                role INTEGER NOT NULL
            );",
        )])
    }

    pub fn new() -> Self {
        let mut conn = Connection::open("./db.sqlite").expect("Cannot mount sqlite database");

        let migrations = Self::migrations();
        migrations
            .to_latest(&mut conn)
            .expect("Cannot run migrations");

        Self { conn }
    }
}
