// Inert research canary. It does nothing when required: no network, no filesystem,
// no process access. The scenarios only change the CANARY string, so every
// difference between a tarball and its attested commit is visible in a diff.
module.exports = { CANARY: "PARANOID_P5_CANARY scenario A payload (inert)" };
