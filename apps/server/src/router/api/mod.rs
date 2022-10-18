use rocket::Route;
mod history;
mod recommendations;
mod search;
mod watchlist;

pub fn routes() -> Vec<Route> {
    routes![
        history::history,
        recommendations::recommendations,
        search::search,
        watchlist::watchlist
    ]
}
