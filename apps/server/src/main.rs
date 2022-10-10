#[macro_use]
extern crate rocket;

mod api;
mod serve;
use crate::api::{history_route, recommendations_route, search_route};
use crate::serve::files;

#[launch]
async fn rocket() -> _ {
    rocket::build()
        .mount(
            "/api",
            routes![search_route, recommendations_route, history_route],
        )
        .mount("/", routes![files])
}
