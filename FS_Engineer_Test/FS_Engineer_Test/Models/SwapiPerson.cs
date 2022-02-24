using System.Collections.Generic;

namespace FS_Engineer_Test.Models
{
    public class SwapiPerson
    {
        public string Name { get; set; }
        public string Height { get; set; }
        public string Mass { get; set; }
        public string Hair_Color { get; set; }
        public string Skin_Color { get; set; }
        public string Eye_Color { get; set; }
        public string Birth_Year { get; set; }
        public string Gender { get; set; }
        public string HomeWorld { get; set; }
        public IEnumerable<string> Films { get; set; }
        public IEnumerable<string> Species { get; set; }
        public IEnumerable<string> Vehicles { get; set; }
        public IEnumerable<string> StarShips { get; set; }
        public string Created { get; set; }
        public string Edited { get; set; }
        public string Url { get; set; }
    }
}
