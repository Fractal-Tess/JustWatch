use rusqlite_migration::{Migrations, M};

pub fn migrations() -> Migrations<'static> {
    Migrations::new(vec![
        M::up(
            "CREATE TABLE IF NOT EXISTS posts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                text VARCHAR NOT NULL
            )",
        ), // Migrate tables like so:
           // M::up("ALTER TABLE posts ADD COLUMN desc TEXT;"),
    ])
}
