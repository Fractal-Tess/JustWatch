use std::fs::remove_file;

use rocket::{Build, Rocket};

#[macro_use]
extern crate rocket;

#[launch]
async fn rocket() -> Rocket<Build> {
    // TODO: Remove this in prod
    let _ = remove_file("./db.sqlite");

    let rocket = server::rocket();

    rocket
}
