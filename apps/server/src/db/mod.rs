mod initialization;
mod migrations;
mod models;
mod rusqlite;

use rocket::fairing::AdHoc;
use rocket::{Build, Rocket};
use rocket_sync_db_pools::rusqlite::params;

pub use self::migrations::migrations;
pub use self::rusqlite::DB;
