#[macro_use]
extern crate rocket;

mod serve;
use crate::serve::files;

#[launch]
async fn rocket() -> _ {
    rocket::build().mount("/", routes![files])
}
