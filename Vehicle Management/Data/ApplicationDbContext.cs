using Microsoft.EntityFrameworkCore;
using Vehicle_Management.Models;

namespace Vehicle_Management.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Make> Makes { get; set; }
        public DbSet<Model> Models { get; set; }
    }
}
