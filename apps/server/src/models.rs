mod search;
mod user;

use std::path::PathBuf;

use rocket::{fairing::AdHoc, response::Debug};

use rusqlite::{Connection, Result};

pub struct Models {}

impl Models {
    pub fn stage() -> AdHoc {
        AdHoc::on_ignite("Models stage", |rocket| async { rocket })
    }
}
