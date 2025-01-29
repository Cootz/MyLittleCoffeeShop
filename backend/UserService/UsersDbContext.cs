using Microsoft.EntityFrameworkCore;
using System.Data;
using UserService.Models;

namespace UserService
{
    public class UsersDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public DbSet<AuthData> AuthData { get; set; }
    }
}
