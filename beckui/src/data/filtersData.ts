export const filtersData = {
  phase1: {
    'BP Received': false,
    'BP Sent Via Mail': true,
  },
  phase2: {
    'Treating & No medical ordered yet': false,
    'Treating & Some Medical Ordered': false,
    'Finished Treating/RTS & Awaiting additional medical provider names': false,
    'Finished Treating/RTS & All Medical Ordered': false,
  },
  phase3: {
    'Finished Treating/RTS & Awaiting additional medical provider names': false,
    'Finished Treating/RTS & All Medical Ordered': false,
    'RTS/ All Medical Received': false,
    'Ordered/ Waiting on Old Medical': true,
  },
  phase4: {
    'Sent to Demand Writer': false,
    'Liability Demand Sent': false,
    'UM Demand Sent': false,
    'UIM Demand Sent': false,
    '30 Day Extension Given to Adjuster': false,
  },
  phase5: {
    'Negotiating Settlement': false,
    'Awaiting Mediation': true,
    'Referred Case': false,
  },
  phase6: {
    'Final Offer Received, waiting on lien sheet': true,
    'Final Offer Received, lien sheet complete': false,
    'Accepted Settlement': false,
    'Awaiting Settlement Hearing': false,
    'Finished Case (Archive It)': false,
  },
};
