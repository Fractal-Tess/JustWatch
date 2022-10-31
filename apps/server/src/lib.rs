pub mod db;
pub mod models;
pub mod router;

use models::Models;
use rocket::{Build, Rocket};

#[macro_use]
extern crate rocket;

pub fn rocket() -> Rocket<Build> {
    rocket::build()
        .attach(Models::stage())
        .attach(router::stage())
}
