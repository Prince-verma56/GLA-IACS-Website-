import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, SectionHeading } from "@/components/PageLayout";
import { contacts, conference } from "@/lib/conference";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — IACS 2027, GLA University Mathura" },
      {
        name: "description",
        content: `Contact details for the ${conference.name} organizing committee.`,
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageLayout
      eyebrow="Contact"
      title="Get in touch"
      intro="For queries regarding registration, accommodation, or the scientific programme, please reach out to the organizing committee."
    >
      <div className="max-w-4xl">
        <SectionHeading index="01" title="General Enquiries" />
        <div className="mt-6 flex flex-col gap-2 text-muted-foreground">
          <p>
            <strong className="text-foreground">Email:</strong>{" "}
            <a href={`mailto:${conference.email}`} className="text-primary hover:underline">
              {conference.email}
            </a>
          </p>
          <p>
            <strong className="text-foreground">Phone:</strong> {conference.phone}
          </p>
        </div>

        <SectionHeading index="02" title="Organizing Committee Contacts" />
        <ul className="mt-6 divide-y divide-rule border-y border-rule">
          {contacts.map((contact, i) => (
            <li key={contact.name} className="flex flex-col md:flex-row gap-2 md:gap-6 py-5">
              <span className="eyebrow shrink-0 text-primary hidden md:block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <p className="font-medium text-foreground">{contact.name}</p>
                {contact.role && <p className="text-sm text-muted-foreground">{contact.role}</p>}
              </div>
              <div className="md:text-right">
                {contact.phone && (
                  <a href={`tel:${contact.phone.replace(/ /g, "")}`} className="text-primary hover:underline">
                    {contact.phone}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}
