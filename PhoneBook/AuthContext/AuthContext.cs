using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using PhoneBook.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;

public class AuthContext : IdentityDbContext<IdentityUser>
{
    
    public AuthContext()
        : base("AuthContext")
    {

    }
}