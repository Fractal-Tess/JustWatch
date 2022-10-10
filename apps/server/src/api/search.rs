use rocket::http::Status;

#[get("/api/search?<query>&<ignore_cache>")]
pub async fn search_route(query: String, ignore_cache: Option<bool>) {}
