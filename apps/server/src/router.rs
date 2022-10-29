mod api;
mod webui;

use rocket::fairing::AdHoc;

pub fn stage() -> AdHoc {
    AdHoc::on_ignite("Router stage", |rocket| async {
        rocket
            .mount("/api", api::routes())
            .mount("/", webui::routes())
    })
}
