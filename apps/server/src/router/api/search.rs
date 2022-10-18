use crate::db::DB;

#[get("/search?<query>&<ignore_cache>")]
pub async fn search(query: String, ignore_cache: Option<bool>, db: DB) {
    db.hello().await;
}
