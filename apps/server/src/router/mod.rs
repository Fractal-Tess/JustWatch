mod api;
mod serve;

use rocket::fairing::AdHoc;

pub fn stage() -> AdHoc {
    AdHoc::on_ignite("Router stage", |rocket| async {
        rocket
            .mount("/api", api::routes())
            .mount("/", routes![serve::serve])
    })
}
