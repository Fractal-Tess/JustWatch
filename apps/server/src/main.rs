#[macro_use]
extern crate rocket;

mod api;
mod db;
mod serve;

use std::path::PathBuf;

use crate::api::{history_route, recommendations_route, search_route};
use crate::db::DB;
use crate::serve::files;

#[launch]
async fn rocket() -> _ {
    let p = PathBuf::from("../db/database.db");
    let mut db = DB::new(p);
    db.init().expect("Initializing database failed");

    rocket::build()
        .mount(
            "/api",
            routes![search_route, recommendations_route, history_route],
        )
        .mount("/", routes![files])
}
