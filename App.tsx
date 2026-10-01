import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  useWindowDimensions,
} from "react-native";

export default function App() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 800;

  return (
    <ScrollView style={styles.page}>
      {/* NAVIGATION */}
      <View style={styles.navbar}>
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoLetter}>C</Text>
          </View>

          <Text style={styles.logoText}>CivicLens</Text>
        </View>

        {isDesktop && (
          <View style={styles.navLinks}>
            <Text style={styles.navLink}>Home</Text>
            <Text style={styles.navLink}>Issues</Text>
            <Text style={styles.navLink}>Compare</Text>
            <Text style={styles.navLink}>Updates</Text>
          </View>
        )}

        <Pressable style={styles.navButton}>
          <Text style={styles.navButtonText}>Explore Issues</Text>
        </Pressable>
      </View>

      {/* HERO SECTION */}
      <View
        style={[
          styles.hero,
          !isDesktop && styles.heroMobile,
        ]}
      >
        <View style={styles.heroContent}>
          <Text style={styles.eyebrow}>
            INFORMED CIVIC PARTICIPATION
          </Text>

          <Text style={styles.heroTitle}>
            Understand the issues.
            {"\n"}
            Make your own decision.
          </Text>

          <Text style={styles.heroDescription}>
            Explore political issues, compare documented positions,
            and understand the facts behind the debate.
          </Text>

          <View style={styles.heroButtons}>
            <Pressable style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>
                Explore Issues
              </Text>
            </Pressable>

            <Pressable style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>
                How it works
              </Text>
            </Pressable>
          </View>
        </View>

        {isDesktop && (
          <View style={styles.heroCard}>
            <Text style={styles.cardLabel}>THIS WEEK</Text>

            <Text style={styles.heroCardTitle}>
              What are people talking about?
            </Text>

            <Topic number="01" title="Economy" />
            <Topic number="02" title="Education" />
            <Topic number="03" title="Healthcare" />
          </View>
        )}
      </View>

      {/* STATISTICS */}
      <View
        style={[
          styles.stats,
          !isDesktop && styles.statsMobile,
        ]}
      >
        <Stat number="42" label="Issues tracked" />
        <Stat number="128" label="Sources reviewed" />
        <Stat number="16" label="Public figures" />
        <Stat number="100%" label="Source based" />
      </View>

      {/* ISSUES */}
      <View style={styles.section}>
        <Text style={styles.sectionEyebrow}>EXPLORE</Text>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Issues that matter
          </Text>

          <Text style={styles.viewAll}>View all →</Text>
        </View>

        <View style={styles.issueGrid}>
          <IssueCard
            icon="◎"
            title="Economy"
            description="Taxes, employment, inflation and public spending."
          />

          <IssueCard
            icon="▣"
            title="Education"
            description="Schools, universities, funding and accessibility."
          />

          <IssueCard
            icon="+"
            title="Healthcare"
            description="Healthcare access, funding and public services."
          />

          <IssueCard
            icon="⌂"
            title="Housing"
            description="Affordability, construction and housing policy."
          />
        </View>
      </View>

      {/* COMPARISON SECTION */}
      <View
        style={[
          styles.compareSection,
          !isDesktop && styles.compareMobile,
        ]}
      >
        <View style={styles.compareIntro}>
          <Text style={styles.compareEyebrow}>
            COMPARE
          </Text>

          <Text style={styles.compareTitle}>
            See the differences clearly.
          </Text>

          <Text style={styles.compareDescription}>
            Compare documented positions on the same issue
            without reducing complex political questions to
            a single score.
          </Text>

          <Pressable style={styles.lightButton}>
            <Text style={styles.lightButtonText}>
              Start comparing
            </Text>
          </Pressable>
        </View>

        <View style={styles.compareCard}>
          <View style={styles.compareHeader}>
            <Text style={styles.compareIssue}>
              ECONOMY
            </Text>

            <Text style={styles.sourceCount}>
              8 sources
            </Text>
          </View>

          <CompareRow
            name="Position A"
            description="Supports reducing taxes on small businesses."
          />

          <CompareRow
            name="Position B"
            description="Supports maintaining current small-business tax rates."
          />

          <CompareRow
            name="Position C"
            description="Supports targeted tax credits for new businesses."
          />

          <Text style={styles.sourceLink}>
            View supporting sources →
          </Text>
        </View>
      </View>

      {/* NEWS */}
      <View style={styles.section}>
        <Text style={styles.sectionEyebrow}>LATEST</Text>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Civic updates
          </Text>

          <Text style={styles.viewAll}>
            All updates →
          </Text>
        </View>

        <View
          style={[
            styles.newsGrid,
            !isDesktop && styles.newsGridMobile,
          ]}
        >
          <NewsCard
            category="POLICY"
            title="New education proposal enters public discussion"
            time="2 hours ago"
          />

          <NewsCard
            category="ECONOMY"
            title="Government releases updated economic figures"
            time="Yesterday"
          />

          <NewsCard
            category="CIVIC"
            title="Election authorities publish new voter information"
            time="2 days ago"
          />
        </View>
      </View>

      {/* FOOTER */}
      <View
        style={[
          styles.footer,
          !isDesktop && styles.footerMobile,
        ]}
      >
        <View>
          <Text style={styles.footerLogo}>
            CivicLens
          </Text>

          <Text style={styles.footerDescription}>
            Information for a more informed civic conversation.
          </Text>
        </View>

        <Text style={styles.footerCopyright}>
          © 2026 CivicLens
        </Text>
      </View>
    </ScrollView>
  );
}

/* =========================
   SMALL COMPONENTS
========================= */

function Topic({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <View style={styles.topic}>
      <View style={styles.topicNumber}>
        <Text style={styles.topicNumberText}>
          {number}
        </Text>
      </View>

      <View>
        <Text style={styles.topicTitle}>
          {title}
        </Text>

        <Text style={styles.topicSubtitle}>
          Documented positions
        </Text>
      </View>
    </View>
  );
}

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statNumber}>
        {number}
      </Text>

      <Text style={styles.statLabel}>
        {label}
      </Text>
    </View>
  );
}

function IssueCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <Pressable style={styles.issueCard}>
      <Text style={styles.issueIcon}>
        {icon}
      </Text>

      <Text style={styles.issueTitle}>
        {title}
      </Text>

      <Text style={styles.issueDescription}>
        {description}
      </Text>

      <Text style={styles.issueArrow}>
        →
      </Text>
    </Pressable>
  );
}

function CompareRow({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <View style={styles.compareRow}>
      <Text style={styles.compareName}>
        {name}
      </Text>

      <Text style={styles.compareText}>
        {description}
      </Text>
    </View>
  );
}

function NewsCard({
  category,
  title,
  time,
}: {
  category: string;
  title: string;
  time: string;
}) {
  return (
    <Pressable style={styles.newsCard}>
      <Text style={styles.newsCategory}>
        {category}
      </Text>

      <Text style={styles.newsTitle}>
        {title}
      </Text>

      <View style={styles.newsBottom}>
        <Text style={styles.newsTime}>
          {time}
        </Text>

        <Text style={styles.newsArrow}>
          →
        </Text>
      </View>
    </Pressable>
  );
}

/* =========================
   STYLES
========================= */

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#F6F7F9",
  },

  /* NAVBAR */

  navbar: {
    minHeight: 72,
    paddingHorizontal: 32,
    paddingVertical: 14,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#172033",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  logoLetter: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
  },

  logoText: {
    color: "#172033",
    fontSize: 21,
    fontWeight: "800",
  },

  navLinks: {
    flexDirection: "row",
    gap: 30,
  },

  navLink: {
    color: "#566274",
    fontSize: 14,
    fontWeight: "600",
  },

  navButton: {
    backgroundColor: "#172033",
    paddingHorizontal: 18,
    paddingVertical: 11,
    borderRadius: 8,
  },

  navButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },

  /* HERO */

  hero: {
    paddingHorizontal: 60,
    paddingVertical: 75,
    backgroundColor: "#EEF1F5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 50,
  },

  heroMobile: {
    paddingHorizontal: 25,
    paddingVertical: 55,
  },

  heroContent: {
    flex: 1,
    maxWidth: 680,
  },

  eyebrow: {
    color: "#657286",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 18,
  },

  heroTitle: {
    color: "#172033",
    fontSize: 48,
    lineHeight: 57,
    fontWeight: "800",
    marginBottom: 20,
  },

  heroDescription: {
    color: "#657080",
    fontSize: 17,
    lineHeight: 27,
    maxWidth: 590,
  },

  heroButtons: {
    flexDirection: "row",
    gap: 12,
    marginTop: 30,
  },

  primaryButton: {
    backgroundColor: "#172033",
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 8,
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },

  secondaryButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#CDD2DA",
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 8,
  },

  secondaryButtonText: {
    color: "#344054",
    fontSize: 14,
    fontWeight: "700",
  },

  /* HERO CARD */

  heroCard: {
    width: 370,
    backgroundColor: "#FFFFFF",
    padding: 28,
    borderRadius: 14,
    elevation: 5,
  },

  cardLabel: {
    color: "#7A8595",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 12,
  },

  heroCardTitle: {
    color: "#172033",
    fontSize: 23,
    fontWeight: "800",
    marginBottom: 18,
  },

  topic: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: "#ECEEF1",
  },

  topicNumber: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#EEF1F5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  topicNumberText: {
    color: "#59677A",
    fontSize: 11,
    fontWeight: "800",
  },

  topicTitle: {
    color: "#172033",
    fontSize: 15,
    fontWeight: "700",
  },

  topicSubtitle: {
    color: "#8A94A3",
    fontSize: 12,
    marginTop: 3,
  },

  /* STATS */

  stats: {
    paddingHorizontal: 50,
    paddingVertical: 30,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  statsMobile: {
    paddingHorizontal: 10,
    flexWrap: "wrap",
    gap: 25,
  },

  stat: {
    alignItems: "center",
    minWidth: 110,
  },

  statNumber: {
    color: "#172033",
    fontSize: 28,
    fontWeight: "800",
  },

  statLabel: {
    color: "#7B8492",
    fontSize: 12,
    marginTop: 5,
  },

  /* SECTIONS */

  section: {
    paddingHorizontal: 60,
    paddingVertical: 65,
  },

  sectionEyebrow: {
    color: "#657286",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.7,
    marginBottom: 8,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: 28,
  },

  sectionTitle: {
    color: "#172033",
    fontSize: 34,
    fontWeight: "800",
  },

  viewAll: {
    color: "#56677D",
    fontSize: 14,
    fontWeight: "700",
  },

  /* ISSUE CARDS */

  issueGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },

  issueCard: {
    flex: 1,
    minWidth: 210,
    minHeight: 205,
    padding: 25,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E3E6EA",
    borderRadius: 12,
  },

  issueIcon: {
    color: "#34445B",
    fontSize: 27,
    marginBottom: 22,
  },

  issueTitle: {
    color: "#172033",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 10,
  },

  issueDescription: {
    color: "#707A88",
    fontSize: 14,
    lineHeight: 21,
  },

  issueArrow: {
    color: "#172033",
    fontSize: 20,
    marginTop: 20,
  },

  /* COMPARISON */

  compareSection: {
    paddingHorizontal: 60,
    paddingVertical: 70,
    backgroundColor: "#172033",
    flexDirection: "row",
    alignItems: "center",
    gap: 50,
  },

  compareMobile: {
    paddingHorizontal: 25,
    flexDirection: "column",
    alignItems: "stretch",
  },

  compareIntro: {
    flex: 1,
  },

  compareEyebrow: {
    color: "#9AA6B7",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.7,
    marginBottom: 10,
  },

  compareTitle: {
    color: "#FFFFFF",
    fontSize: 34,
    lineHeight: 42,
    fontWeight: "800",
  },

  compareDescription: {
    color: "#AEB8C6",
    fontSize: 16,
    lineHeight: 25,
    marginTop: 18,
    marginBottom: 28,
    maxWidth: 520,
  },

  lightButton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 8,
    alignSelf: "flex-start",
  },

  lightButtonText: {
    color: "#172033",
    fontSize: 14,
    fontWeight: "700",
  },

  compareCard: {
    flex: 1,
    maxWidth: 570,
    backgroundColor: "#FFFFFF",
    padding: 26,
    borderRadius: 13,
  },

  compareHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  compareIssue: {
    color: "#64748B",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
  },

  sourceCount: {
    color: "#8A94A3",
    fontSize: 11,
  },

  compareRow: {
    paddingVertical: 18,
    borderTopWidth: 1,
    borderTopColor: "#E8EBEF",
  },

  compareName: {
    color: "#172033",
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 5,
  },

  compareText: {
    color: "#687385",
    fontSize: 14,
    lineHeight: 21,
  },

  sourceLink: {
    color: "#34445B",
    fontSize: 13,
    fontWeight: "700",
    marginTop: 12,
  },

  /* NEWS */

  newsGrid: {
    flexDirection: "row",
    gap: 16,
  },

  newsGridMobile: {
    flexDirection: "column",
  },

  newsCard: {
    flex: 1,
    minHeight: 190,
    padding: 25,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E3E6EA",
    borderRadius: 12,
    justifyContent: "space-between",
  },

  newsCategory: {
    color: "#64748B",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
  },

  newsTitle: {
    color: "#172033",
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "700",
    marginVertical: 20,
  },

  newsBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  newsTime: {
    color: "#8A94A3",
    fontSize: 12,
  },

  newsArrow: {
    color: "#172033",
    fontSize: 18,
  },

  /* FOOTER */

  footer: {
    paddingHorizontal: 60,
    paddingVertical: 40,
    backgroundColor: "#0E1624",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  footerMobile: {
    paddingHorizontal: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 20,
  },

  footerLogo: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "800",
  },

  footerDescription: {
    color: "#8894A5",
    fontSize: 12,
    marginTop: 7,
  },

  footerCopyright: {
    color: "#8894A5",
    fontSize: 12,
  },
});