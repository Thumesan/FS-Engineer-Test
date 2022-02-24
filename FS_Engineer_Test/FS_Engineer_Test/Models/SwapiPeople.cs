using System.Collections.Generic;

namespace FS_Engineer_Test.Models
{
    public class SwapiPeople
    {
        public int Count { get; set; }
        public string Next { get; set; }
        public string Previous { get; set; }
        public IEnumerable<SwapiPerson> Results { get; set; }

    }
}