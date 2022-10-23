mod search;
mod user;

use rocket::response::Debug;
use rocket_sync_db_pools::rusqlite;

#[allow(dead_code)]
type Result<T, E = Debug<rusqlite::Error>> = std::result::Result<T, E>;

pub struct Models;
