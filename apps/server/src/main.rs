use models::Models;
use rocket::{Build, Rocket};

#[macro_use]
extern crate rocket;

mod db;
mod models;
mod router;

#[launch]
async fn rocket() -> Rocket<Build> {
    rocket::build()
        // .attach(db::DB::stage())
        .attach(Models::stage())
        .attach(router::stage())
}
