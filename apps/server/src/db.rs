use std::path::PathBuf;

use rocket::fairing::AdHoc;
use rocket::serde::{json::Json, Deserialize, Serialize};
use rusqlite::{Connection, Result};

#[derive(Debug)]
struct Cat {
    name: String,
    color: String,
}

#[derive(Debug, Clone, Deserialize, Serialize)]
#[serde(crate = "rocket::serde")]
struct Post {
    #[serde(skip_deserializing, skip_serializing_if = "Option::is_none")]
    id: Option<i64>,
    title: String,
    text: String,
}

pub struct DB {
    pub conn: Connection,
}
impl DB {
    pub fn new(database_path: PathBuf) -> Self {
        DB {
            conn: Connection::open("cats.db").unwrap(),
        }
    }
    pub fn init(&mut self) -> Result<()> {
        self.conn.execute(
            "create table if not exists cat_colors (
             id integer primary key,
             name text not null unique
         )",
            [],
        )?;
        self.conn.execute(
            "create table if not exists cats (
             id integer primary key,
             name text not null,
             color_id integer not null references cat_colors(id)
         )",
            [],
        )?;

        Ok(())
    }
}
