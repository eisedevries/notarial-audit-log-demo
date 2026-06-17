"""CDR-specific helpers.

The Centraal Digitaal Repertorium returns codes 1..281. The mapping below
groups them by domain meaning and assigns an RFC 5424 severity.
"""

from __future__ import annotations

# Coarse buckets; see thesis appendix for the full table.
_SUCCESS = {1, 2, 3, 5, 7, 8, 9, 11, 12}
_NOTICE = {4, 10, 109, 114, 115}
_INFO_EMPTY = {100, 101, 102, 103, 117, 118, 119, 120, 209}
_INPUT_VALIDATION = {104, 105, 106, 111, 245, 246, 258}
_DEADLINE = {108, 116}  # wettelijke termijn overschreden
_BUSINESS_RULE = {
    201, 202, 203, 204, 205, 207, 213, 214, 215, 216, 217, 218, 219, 228, 230, 231, 232,
    233, 234, 235, 236, 237, 248, 249, 250, 251, 253, 254, 255, 256, 257, 259, 260,
    261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 276, 277, 278,
    279, 280, 281,
}
_SECURITY = {206, 222, 223, 224, 225, 226, 227, 229, 274}
_UNAVAILABLE = {238, 242, 243, 275}
_AUTHORIZATION = {240, 241}


def severity_for_code(code: int) -> int:
    """Map CDR response code to RFC 5424 severity (2..6).

    2 critical · 3 error · 4 warning · 5 notice · 6 informational
    """
    if code in _SUCCESS or code in _INFO_EMPTY:
        return 6
    if code in _NOTICE:
        return 5
    if code in _DEADLINE or code in _INPUT_VALIDATION or code in _AUTHORIZATION:
        return 4
    if code in _BUSINESS_RULE or code in _SECURITY:
        return 3
    if code in _UNAVAILABLE:
        return 2
    return 5  # default: notice
