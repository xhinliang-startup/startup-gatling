package com.xhinliang.startup.gatling

import java.util.concurrent.ThreadLocalRandom

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class ComputerWorld extends Simulation {

  val httpProtocol = http
    .baseUrl("https://xhinliang.com")

  val computerDbScn = scenario("XhinLiang random api")
    .exec(
      http("random")
        .get("/api/image/random")
        .check(
          status is 200,
          // regex("""\d+ computers found"""),
          // css("#add", "href").saveAs("addComputer")
        )
    )

  setUp(computerDbScn.inject(
    constantUsersPerSec(20) during (40 second)
  ).protocols(httpProtocol))
}