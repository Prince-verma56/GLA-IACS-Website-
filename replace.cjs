const fs = require('fs');
const content = fs.readFileSync('e:/cardiovascular-care-hub-main/cardiovascular-care-hub-main/src/routes/committee.tsx', 'utf8');

const newContent = `
        {/* Soft Wave Transition */}
        <div className="w-full overflow-hidden leading-none bg-[#f5f3ee]">
          <svg className="w-full block text-primary-deep h-8 md:h-16" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" />
          </svg>
        </div>

        {/* ══════════════════════════════════════════════════
            IACS PATRONS & OFFICE BEARERS
        ══════════════════════════════════════════════════ */}
        <section className="bg-primary-deep py-16 md:py-24 relative overflow-hidden">
          <HeartbeatLine className="absolute bottom-8 left-0 right-0 text-white opacity-[0.05] w-full" />
          <ConcentricPulse className="absolute -left-24 bottom-0 h-[280px] w-[280px] text-white opacity-10" />

          <div className="shell relative z-10">
            {/* Section heading */}
            <div className="border-b border-white/10 pb-5 mb-12">
              <HorizontalReveal>
                <p className="eyebrow text-white/40">IACS – India Section</p>
              </HorizontalReveal>
              <MaskReveal delay={0.08}>
                <h2 className="display-md mt-3 text-white">Patrons &amp; Office Bearers</h2>
              </MaskReveal>
            </div>

            {/* ── IACS PATRONS ── */}
            <GroupBlock label="IACS Patrons" number="04">
              <StaggerReveal className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8" stagger={0.05}>
                {iacsPatrons?.people.map((person) => (
                  <PersonCardDark
                    key={person.name}
                    name={person.name}
                    role={person.role}
                    org={person.org}
                    image={person.image ?? null}
                    variant="standard"
                  />
                ))}
              </StaggerReveal>
            </GroupBlock>

            {/* ── CHAIRMAN ── */}
            <GroupBlock label="Chairman" number="05">
              <div className="flex justify-center md:justify-start">
                {chairman?.people.map((person) => (
                  <TextReveal key={person.name}>
                    <PersonCardDark
                      name={person.name}
                      role={person.role}
                      org={person.org}
                      image={person.image ?? null}
                      variant="featured"
                    />
                  </TextReveal>
                ))}
              </div>
            </GroupBlock>

            {/* ── SECRETARIES ── */}
            <GroupBlock label="Secretaries" number="06">
              <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" stagger={0.05}>
                {officeBearers?.people.map((person) => (
                  <PersonCardDark
                    key={person.name}
                    name={person.name}
                    role={person.role}
                    org={person.org}
                    image={person.image ?? null}
                    variant="standard"
                  />
                ))}
                {orgSecretary?.people.map((person) => (
                  <PersonCardDark
                    key={person.name}
                    name={person.name}
                    role={person.role}
                    org={person.org}
                    phone={person.phone}
                    image={person.image ?? null}
                    variant="standard"
                  />
                ))}
              </StaggerReveal>
            </GroupBlock>

            {/* ── CO-ORGANIZING & JOINT SECRETARIES ── */}
            <GroupBlock label="Co-Organizing & Joint Secretaries" number="07">
              <div className="grid gap-12 sm:grid-cols-2">
                <div>
                  <h4 className="eyebrow text-white/30 mb-5">Co-Organizing Secretaries</h4>
                  <StaggerReveal className="flex flex-col gap-5" stagger={0.05}>
                    {coOrgSecretaries?.people.map((person) => (
                      <PersonCardDark
                        key={person.name}
                        name={person.name}
                        role={person.role}
                        org={person.org}
                        phone={person.phone}
                        image={person.image ?? null}
                        variant="compact"
                      />
                    ))}
                  </StaggerReveal>
                </div>
                <div>
                  <h4 className="eyebrow text-white/30 mb-5">Joint Secretaries</h4>
                  <StaggerReveal className="flex flex-col gap-5" stagger={0.05}>
                    {jointSecretaries?.people.map((person) => (
                      <PersonCardDark
                        key={person.name}
                        name={person.name}
                        role={person.role}
                        org={person.org}
                        phone={person.phone}
                        image={person.image ?? null}
                        variant="compact"
                      />
                    ))}
                  </StaggerReveal>
                </div>
              </div>
            </GroupBlock>
          </div>
        </section>

        {/* Soft Wave Transition */}
        <div className="w-full overflow-hidden leading-none bg-primary-deep">
          <svg className="w-full block text-[#f5f3ee] h-8 md:h-16" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,120 C480,0 960,0 1440,120 L1440,0 L0,0 Z" />
          </svg>
        </div>

        {/* ══════════════════════════════════════════════════
            SCIENTIFIC ADVISORS
        ══════════════════════════════════════════════════ */}
        <section className="bg-[#f5f3ee] py-16 md:py-24 relative overflow-hidden">
          <div className="shell relative z-10">
            <div className="border-b border-rule pb-5 mb-12">
              <HorizontalReveal>
                <p className="eyebrow text-primary">Scientific Direction</p>
              </HorizontalReveal>
              <MaskReveal delay={0.08}>
                <h2 className="display-md mt-3">Distinguished Scientific Advisors</h2>
              </MaskReveal>
            </div>

            <StaggerReveal as="ol" className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
              {scientificAdvisors.map((p, idx) => (
                <DirectoryRow
                  key={p.name}
                  index={idx + 1}
                  name={p.name}
                  {...(p.role ? { role: p.role } : {})}
                  {...(p.org ? { org: p.org } : {})}
                />
              ))}
            </StaggerReveal>

            {/* Eminent Panel */}
            <div className="mt-16 border-t border-rule pt-12">
              <HorizontalReveal>
                <p className="eyebrow text-primary mb-2">Advisory Panel</p>
              </HorizontalReveal>
              <MaskReveal delay={0.05}>
                <h3 className="text-[1.375rem] font-semibold tracking-tight mb-10">
                  Eminent Scientific Advisory Panel
                </h3>
              </MaskReveal>
              <StaggerReveal as="ol" className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
                {eminentPanel.map((p, idx) => (
                  <DirectoryRow
                    key={p.name}
                    index={idx + 1}
                    name={p.name}
                    {...(p.role ? { role: p.role } : {})}
                    {...(p.org ? { org: p.org } : {})}
                  />
                ))}
              </StaggerReveal>
            </div>
          </div>
        </section>

        {/* Soft Wave Transition */}
        <div className="w-full overflow-hidden leading-none bg-[#f5f3ee]">
          <svg className="w-full block text-primary-deep h-8 md:h-16" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" />
          </svg>
        </div>

        {/* ══════════════════════════════════════════════════
            ORGANISING COMMITTEES
        ══════════════════════════════════════════════════ */}
        <section className="bg-primary-deep py-16 md:py-24 relative overflow-hidden">
          <HeartbeatLine className="absolute bottom-0 left-0 right-0 text-white opacity-[0.05] w-full" />
          <div className="shell relative z-10">
            <div className="border-b border-white/10 pb-5 mb-12">
              <HorizontalReveal>
                <p className="eyebrow text-white/40">Organising</p>
              </HorizontalReveal>
              <MaskReveal delay={0.08}>
                <h2 className="display-md mt-3 text-white">Organizing Committees</h2>
              </MaskReveal>
            </div>

            <div className="space-y-12">
              {organizingCommittees.map((committee) => (
                <div key={committee.title} className="border-t border-white/10 pt-8">
                  <div className="grid gap-6 md:grid-cols-12">
                    <TextReveal className="md:col-span-4 lg:col-span-3">
                      <p className="eyebrow text-white/40">{committee.title}</p>
                    </TextReveal>
                    <StaggerReveal
                      as="ul"
                      className="md:col-span-8 lg:col-span-9 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3"
                      stagger={0.04}
                    >
                      {committee.members.map((m, idx) => (
                        <li key={m} className="flex gap-3 border-b border-white/8 py-3 text-sm leading-snug">
                          <span className="eyebrow text-white/20 shrink-0 pt-0.5">{String(idx + 1).padStart(2, "0")}</span>
                          <span className="text-white/70">{m}</span>
                        </li>
                      ))}
                    </StaggerReveal>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Soft Wave Transition */}
        <div className="w-full overflow-hidden leading-none bg-primary-deep">
          <svg className="w-full block text-[#f5f3ee] h-8 md:h-16" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,120 C480,0 960,0 1440,120 L1440,0 L0,0 Z" />
          </svg>
        </div>

        {/* ══════════════════════════════════════════════════
            ADVISORY COMMITTEES
        ══════════════════════════════════════════════════ */}
        <section className="bg-[#f5f3ee] py-16 md:py-24">
          <div className="shell">
            <div className="border-b border-rule pb-5 mb-12">
              <HorizontalReveal>
                <p className="eyebrow text-primary">Advisory</p>
              </HorizontalReveal>
              <MaskReveal delay={0.08}>
                <h2 className="display-md mt-3">Advisory Committees</h2>
              </MaskReveal>
            </div>

            <AdvisoryBlock label="International Advisory Committee" names={advisoryInternational} />
            <div className="border-t border-rule mt-12 pt-12">
              <AdvisoryBlock label="National Advisory Committee" names={advisoryNational} />
            </div>
            <div className="border-t border-rule mt-12 pt-12">
              <AdvisoryBlock label="University Members — Organizing Committee" names={advisoryUniversity} />
            </div>
          </div>
        </section>
`;

const startIndexStr = '{/* ══════════════════════════════════════════════════\n            IACS PATRONS & OFFICE BEARERS';
const endIndexStr = '<SiteFooter />\n    </div>\n  );\n}';

const parts = content.split(startIndexStr);
const footerParts = parts[1].split(endIndexStr);

const subComponentsStr = '/* ══════════════════════════════════════════════════════════════\n   SUB-COMPONENTS';
const subCompSplit = content.split(subComponentsStr);

const finalContent = parts[0] + newContent + '      </main>\n      <SiteFooter />\n    </div>\n  );\n}\n\n' + subComponentsStr + subCompSplit[1];

fs.writeFileSync('e:/cardiovascular-care-hub-main/cardiovascular-care-hub-main/src/routes/committee.tsx', finalContent);
console.log('done');
