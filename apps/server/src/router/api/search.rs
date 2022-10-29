use crate::models::Models;
use rocket::State;

#[get("/search?<query>&<typehead>")]
pub async fn search(query: String, typehead: Option<bool>, models: &State<Models>) {}
