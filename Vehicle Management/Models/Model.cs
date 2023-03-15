using System.ComponentModel.DataAnnotations;

namespace Vehicle_Management.Models
{
    public class Model
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(255)]
        public string Name { get; set; }
        [Required]
        public int MakeId { get; set; }
        public Make? Make { get;set; }
    }
}
