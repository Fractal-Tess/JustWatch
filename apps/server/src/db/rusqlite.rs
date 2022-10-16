use rocket_sync_db_pools::{database, rusqlite};

#[database("rusqlite")]
pub struct DB(rusqlite::Connection);
