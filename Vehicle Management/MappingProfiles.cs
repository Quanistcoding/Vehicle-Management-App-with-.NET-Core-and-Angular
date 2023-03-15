using AutoMapper;
using System.Net;
using Vehicle_Management.Controllers.Resources;
using Vehicle_Management.Models;

namespace Vehicle_Management
{
    public class MappingProfiles :Profile
    {
        public MappingProfiles()
        {
            CreateMap<Model, ModelResource>();
            CreateMap<Make, MakeWithoutModel>();
            CreateMap<Make, MakeResource>();
            CreateMap<Model, ModelWithoutMake>();


        }
    }
}
