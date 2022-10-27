use crate::models::Models;

#[get("/search?<query>&<ignore_cache>")]
pub async fn search(query: String, ignore_cache: Option<bool>) {
    Models::test();
    // Models::search(db, query, ignore_cache);
}
