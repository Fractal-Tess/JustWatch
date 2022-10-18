use crate::db::DB;
use rocket::response::Debug;
use rocket_sync_db_pools::rusqlite::{self, params};

#[allow(dead_code)]
type Result<T, E = Debug<rusqlite::Error>> = std::result::Result<T, E>;

impl DB {
    pub async fn hello(&self) {
        let _res = self.run(|con| con.execute("", params![]));
    }
}
