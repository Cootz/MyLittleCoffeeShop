namespace UserService.Models
{
    public class AuthData
    {
        public int UserId { get; set; }
        public string Token { get; set; }
        public DateTime ExpirationDate { get; set; }
    }
}
