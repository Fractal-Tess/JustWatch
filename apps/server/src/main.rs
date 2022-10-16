#[macro_use]
extern crate rocket;

mod api;
mod db;
mod serve;

use crate::api::{history_route, recommendations_route, search_route};
use crate::db::DB;
use crate::serve::files;

#[launch]
async fn rocket() -> _ {
    rocket::build()
        .attach(DB::stage())
        .mount(
            "/api",
            routes![search_route, recommendations_route, history_route],
        )
        .mount("/", routes![files])
}
