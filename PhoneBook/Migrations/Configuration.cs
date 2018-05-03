namespace PhoneBook.Migrations
{
    using PhoneBook.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<PhoneBook.Context.PhonebookContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(PhoneBook.Context.PhonebookContext context)
        {
            context.Contacts.AddOrUpdate(
                p => p.Name,
            new ContactModel { Name = "Taiseer Joudeh", Address = "123 Main", Email = "testname@email.com", PhoneNumber = "123-1234", PreferredContactMethod = "Phone" },
            new ContactModel { Name = "Tirzah", Address = "123 Main", Email = "testname@email.com", PhoneNumber = "123-1234", PreferredContactMethod = "Email" },
            new ContactModel { Name = "Kate", Address = "123 Main", Email = "testname@email.com", PhoneNumber = "123-1234", PreferredContactMethod = "Email" },
            new ContactModel { Name = "Mark", Address = "123 Main", Email = "testname@email.com", PhoneNumber = "123-1234", PreferredContactMethod = "Email" }
    );
        }
    }
}
