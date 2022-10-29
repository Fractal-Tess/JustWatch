pub enum UserRole {
    Admin = 0,
    Viewer = 1,
}

pub struct User {
    pub username: String,
    pub password: String,
}
