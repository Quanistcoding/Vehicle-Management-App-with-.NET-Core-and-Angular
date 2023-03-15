using System.ComponentModel.DataAnnotations;
using Vehicle_Management.Models;

namespace Vehicle_Management.Controllers.Resources
{
    public class MakeResource
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<ModelWithoutMake> Models { get; set; }
    }
}
