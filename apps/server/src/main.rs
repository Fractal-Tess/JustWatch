#[macro_use]
extern crate rocket;

mod db;
mod router;

#[launch]
async fn rocket() -> _ {
    rocket::build()
        .attach(crate::db::DB::stage())
        .attach(crate::router::stage())
}
