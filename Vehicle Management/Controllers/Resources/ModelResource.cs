using System.ComponentModel.DataAnnotations;
using Vehicle_Management.Models;

namespace Vehicle_Management.Controllers.Resources
{
    public class ModelResource
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public MakeWithoutModel Make { get; set; }
    }
}
