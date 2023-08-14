from sqlalchemy.types import Integer, VARCHAR, SmallInteger, Float


SCHEMAS = {
    "players": {
        "pid": Integer,
        "fname": VARCHAR(length=25),
        "lname": VARCHAR(length=25),
        "yrsplayed": SmallInteger,
        "jerseynum": SmallInteger,
        "pos": VARCHAR(length=14),
        "status": VARCHAR(length=8),
        "tid": Integer,
        "goatflag": VARCHAR(length=1),
    },
    "teams": {
        "tid": Integer,
        "full_name": VARCHAR(length=22),
        "abbreviation": VARCHAR(length=3),
        "nickname": VARCHAR(length=13),
        "city": VARCHAR(length=13),
        "state": VARCHAR(length=20),
        "year_founded": SmallInteger,
    },
    "matchups": {
        "gid": Integer,
        "sznstr": VARCHAR(length=7),
        "date": VARCHAR(length=10),
        "htid": Integer,
        "atid": Integer,
        "nquarters": SmallInteger,
        "matchupstr": VARCHAR(length=9),
        "HPTS": SmallInteger,
        "APTS": SmallInteger,
        "HWL": VARCHAR(length=1),
        "HFGM": SmallInteger,
        "HFGA": SmallInteger,
        "HFG_PCT": Float,
        "HFG3M": SmallInteger,
        "HFG3A": SmallInteger,
        "HFG3_PCT": Float,
        "HFTM": SmallInteger,
        "HFTA": SmallInteger,
        "HFT_PCT": Float,
        "HOREB": SmallInteger,
        "HDREB": SmallInteger,
        "HREB": SmallInteger,
        "HAST": SmallInteger,
        "HSTL": SmallInteger,
        "HBLK": SmallInteger,
        "HTOV": SmallInteger,
        "HPF": SmallInteger,
        "HPTS": SmallInteger,
        "AWL": VARCHAR(length=1),
        "AFGM": SmallInteger,
        "AFGA": SmallInteger,
        "AFG_PCT": Float,
        "AFG3M": SmallInteger,
        "AFG3A": SmallInteger,
        "AFG3_PCT": Float,
        "AFTM": SmallInteger,
        "AFTA": SmallInteger,
        "AFT_PCT": Float,
        "AOREB": SmallInteger,
        "ADREB": SmallInteger,
        "AREB": SmallInteger,
        "AAST": SmallInteger,
        "ASTL": SmallInteger,
        "ABLK": SmallInteger,
        "ATOV": SmallInteger,
        "APF": SmallInteger,
        "APTS": SmallInteger,
    },
    "plays": {
        "playid": Integer,
        "pid": Integer,
        "gid": Integer,
        "ptype": VARCHAR(length=4),
        "description": VARCHAR(length=90),
        "url": VARCHAR(length=120),
        "tid": Integer,
        "hscore": VARCHAR(length=9),
        "ascore": VARCHAR(length=9),
        "ptime": VARCHAR(length=5),
        "quarter": SmallInteger,
    },
}

PANDAS_SCHEMA = {
    "matchups": {
        "gid": int,
        "sznstr": str,
        "date": str,
        "htid": int,
        "atid": int,
        "nquarters": int,
        "matchupstr": str,
        "HWL": str,
        "HFGM": int,
        "HFGA": int,
        "HFG_PCT": float,
        "HFG3M": int,
        "HFG3A": int,
        "HFG3_PCT": float,
        "HFTM": int,
        "HFTA": int,
        "HFT_PCT": float,
        "HOREB": int,
        "HDREB": int,
        "HREB": int,
        "HAST": int,
        "HSTL": int,
        "HBLK": int,
        "HTOV": int,
        "HPF": int,
        "HPTS": int,
        "AWL": str,
        "AFGM": int,
        "AFGA": int,
        "AFG_PCT": float,
        "AFG3M": int,
        "AFG3A": int,
        "AFG3_PCT": float,
        "AFTM": int,
        "AFTA": int,
        "AFT_PCT": float,
        "AOREB": int,
        "ADREB": int,
        "AREB": int,
        "AAST": int,
        "ASTL": int,
        "ABLK": int,
        "ATOV": int,
        "APF": int,
        "APTS": int,
    },
    "teams": {
        "tid": int,
        "full_name": str,
        "abbreviation": str,
        "nickname": str,
        "city": str,
        "state": str,
        "year_founded": int,
    },
    "plays": {
        "playid": int,
        "pid": int,
        "gid": int,
        "ptype": str,
        "description": str,
        "url": str,
        "tid": "Int64",
        "hscore": str,
        "ascore": str,
        "ptime": str,
        "quarter": int,
        "views": int,
        "downloads": int,
    },
    "players": {
        "pid": int,
        "fname": str,
        "lname": str,
        "yrsplayed": int,
        "jerseynum": "Int64",
        "status": str,
        "tid": int,
        "pos": str,
        "goatflag": str,
    },
}
