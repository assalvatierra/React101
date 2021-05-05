using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApp05;

namespace WebApp05.Data
{
    public class WebApp05Context : DbContext
    {
        public WebApp05Context (DbContextOptions<WebApp05Context> options)
            : base(options)
        {
        }

        public DbSet<WebApp05.myCar> myCar { get; set; }
    }
}
