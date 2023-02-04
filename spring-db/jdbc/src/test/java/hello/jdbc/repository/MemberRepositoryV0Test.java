package hello.jdbc.repository;

import hello.jdbc.domain.Member;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

import java.sql.SQLException;

import static org.assertj.core.api.Assertions.assertThat;

@Slf4j
class MemberRepositoryV0Test {

  MemberRepositoryV0 repository = new MemberRepositoryV0();
  @Test
  void crud() throws SQLException {
    Member member = new Member("memberV3", 10000);
    repository.save(member);

    Member foundMember = repository.findById(member.getMemberId());
    log.info("foundMember = {}", foundMember);
    log.info("member == foundMember = {}", member == foundMember);
    log.info("member equals foundMember = {}", member.equals(foundMember));
    assertThat(foundMember).isEqualTo(member);
  }
}
