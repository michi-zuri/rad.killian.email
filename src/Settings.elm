module Settings exposing
    ( author
    , canonicalUrl
    , locale
    , subtitle
    , title
    )

import LanguageTag.Language as Language
import LanguageTag.Region as Region


canonicalUrl : String
canonicalUrl =
    "https://rad.killian.email"


locale : Maybe ( Language.Language, Region.Region )
locale =
    Just ( Language.en, Region.au )


title : String
title =
    "Research & Personal Development"


subtitle : String
subtitle =
    "A personal blog with personal stories about what I am currently learning and researching."


author : String
author =
    "Michael Paul Killian"
