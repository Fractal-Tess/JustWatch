mod db;
mod models;
mod router;

use std::fs::remove_file;

use models::Models;
use rocket::{Build, Rocket};

#[macro_use]
extern crate rocket;

#[launch]
async fn rocket() -> Rocket<Build> {
    // TODO: Remove this in prod
    let _ = remove_file("./db.sqlite");

    rocket::build()
        .attach(Models::stage())
        .attach(router::stage())
}
