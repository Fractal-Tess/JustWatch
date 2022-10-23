use rocket::{Build, Rocket};

#[macro_use]
extern crate rocket;

mod db;
mod models;
mod router;

#[launch]
async fn rocket() -> Rocket<Build> {
    rocket::build()
        .attach(crate::db::DB::stage())
        .attach(crate::router::stage())
}
