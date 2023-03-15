using System.ComponentModel.DataAnnotations;

namespace Vehicle_Management.Models
{
    public class Make
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(255)]
        public string Name { get; set; }
        public ICollection<Model>? Models { get;set; }
    }
}
