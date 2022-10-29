mod search;
mod user;

use crate::db::DB;
use rocket::fairing::AdHoc;
use std::sync::Mutex;

pub struct Models {
    #[allow(dead_code)]
    db: Mutex<DB>,
}

impl Models {
    pub fn stage() -> AdHoc {
        AdHoc::on_ignite("Models stage", |rocket| async {
            let db = DB::new();

            let models = Models {
                db: Mutex::from(db),
            };
            rocket.manage(models)
        })
    }
}
