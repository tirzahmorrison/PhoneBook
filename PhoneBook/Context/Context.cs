using PhoneBook.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace PhoneBook.Context
{
    public class PhonebookContext: DbContext
    {
        public DbSet<ContactModel> Contacts { get; set; }
    }
}